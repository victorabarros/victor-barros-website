import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

/**
 * NoiseBackground Component
 * 
 * A component that generates a canvas-based noise background effect.
 * This creates a subtle texture that can be applied to any view.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} [props.style] - Additional styles to apply to the container
 * @param {number} [props.density=.3] - The density of the noise (0-1)
 *                                        Higher values create more noise points
 * @param {number} [props.opacity=0.1] - The opacity of the noise effect (0-1)
 *                                       Controls how visible the noise is
 * @returns {React.Component} - A noise background component
 * 
 * @example
 * // Basic usage with default settings
 * <NoiseBackground />
 * 
 * @example
 * // Custom density and opacity
 * <NoiseBackground density={.8} opacity={.3} />
 */

export const NoiseBackground = ({ style, density = .3, opacity = .1 }) => {
  const canvasRef = useRef(null);

  const generateNoise = (canvas, density, opacity) => {
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set the background color
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, width, height);
    
    // Generate noise
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      // Only add noise based on density (probability)
      if (Math.random() < density) {
        // Generate a random gray value
        const noiseValue = Math.floor(Math.random() * 255);
        
        // Set RGB values to the same value for grayscale noise
        data[i] = noiseValue;     // R
        data[i + 1] = noiseValue; // G
        data[i + 2] = noiseValue; // B
        data[i + 3] = Math.floor(255 * opacity); // Alpha (opacity)
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Generate noise initial
    generateNoise(canvas, density, opacity);

    // Handle window resize to adjust canvas size
    const handleResize = () => {
      if (!canvas) return;
      
      // Match canvas dimensions to window size for full coverage
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Regenerate noise pattern at new size
      generateNoise(canvas, density, opacity);
    };

    // Set initial size
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [density, opacity]);

  return (
    <View style={[styles.container, style]}>
      <canvas
        ref={canvasRef}
        style={styles.canvas}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    pointerEvents: "none",
  },
  canvas: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
}); 