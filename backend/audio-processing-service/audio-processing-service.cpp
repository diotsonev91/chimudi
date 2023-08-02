#include <iostream>
#include <vector>
#include <cmath>
#include "util.cpp"

// YIN algorithm parameters
const int SAMPLE_RATE = 44100;
const int WINDOW_SIZE = 1024;
const double THRESHOLD = 0.2;

// Function to calculate the squared difference between two frames
double squaredDifference(const std::vector<double>& frame1, const std::vector<double>& frame2) {
    double sumSquaredDiff = 0.0;
    for (size_t i = 0; i < frame1.size(); ++i) {
        double diff = frame1[i] - frame2[i];
        sumSquaredDiff += diff * diff;
    }
    return sumSquaredDiff;
}

// Function to calculate the YIN pitch
double calculateYINPitch(const std::vector<double>& audioBuffer, int startIdx) {
    int maxDelay = WINDOW_SIZE / 2;
    double minPitch = SAMPLE_RATE / maxDelay;
    double bestPitch = -1.0;
    double bestDifference = std::numeric_limits<double>::max();

    for (int delay = 1; delay <= maxDelay; ++delay) {
        double difference = squaredDifference(audioBuffer, audioBuffer, startIdx, startIdx + delay);
        if (difference < bestDifference) {
            bestDifference = difference;
            bestPitch = SAMPLE_RATE / (startIdx + delay);
        }
    }

    return bestPitch;
}

// Function to compare the detected pitches with the correct pitch
void comparePitches(const std::vector<double>& detectedPitches, double correctPitch) {
    for (size_t i = 0; i < detectedPitches.size(); ++i) {
        double deviation = std::abs(detectedPitches[i] - correctPitch);
        std::cout << "Chunk " << i << ": Detected Pitch = " << detectedPitches[i]
                  << ", Deviation from Correct Pitch = " << deviation << " Hz" << std::endl;
    }
}

int main() {
     
     // For now to test only comparing with 440hz tone 
    std::string filename1 = "audio_file.wav";
    std::string filename2 = "audio_file2.wav";

    // Call the readAudioFile function to get the audio samples as a vector of doubles
    std::vector<double>  frontendAudioChunks = readAudioFile(filename1);
    std::vector<double> wellSungAudioChunks = readAudioFile(filename2);
    
    // Example preanalyzed correct pitch (replace this with your reference pitch)
    double correctPitch = 440.0; // For example, 440 Hz for A4

    // Vector to store detected pitches
    std::vector<double> detectedPitches;

    // Process each chunk from the frontend audio buffer
    for (const auto& chunk : frontendAudioChunks) {
        // Perform YIN pitch detection for each chunk
        double pitch = calculateYINPitch(chunk, 0);
        detectedPitches.push_back(pitch);
    }

    // Compare the detected pitches with the correct pitch
    comparePitches(detectedPitches, correctPitch);

    return 0;
}
