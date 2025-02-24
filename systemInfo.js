// systemInfo.js

const os = require('os');

// Function to get system information
function getSystemInfo() {
  // OS Type (e.g., Linux, Darwin, Windows)
  const osType = os.type();

  // Total memory (in bytes)
  const totalMemory = os.totalmem();

  // Free memory (in bytes)
  const freeMemory = os.freemem();

  // CPU information (array of CPU cores)
  const cpus = os.cpus();

  // Construct system information object
  const systemInfo = {
    osType: osType,
    totalMemory: totalMemory,
    freeMemory: freeMemory,
    cpus: cpus.map(cpu => ({
      model: cpu.model,
      speed: cpu.speed,
    })),
  };

  // Return system information
  return systemInfo;
}

// Add debugging logs
console.log('Retrieving system information...');

// Fetch the system information
const systemInfo = getSystemInfo();

// Log the system information for debugging
console.log('System information retrieved:', systemInfo);

console.log("=== System Information ===");
console.log(`OS Type: ${systemInfo.osType}`);
console.log(`Total Memory: ${(systemInfo.totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`); // Convert bytes to GB
console.log(`Free Memory: ${(systemInfo.freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log("CPU Information:");
systemInfo.cpus.forEach((cpu, index) => {
  console.log(`  CPU ${index + 1}: Model - ${cpu.model}, Speed - ${cpu.speed} MHz`);
});
console.log("===========================");
