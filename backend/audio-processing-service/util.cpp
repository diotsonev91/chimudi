#include <iostream>
#include <vector>
#include <cmath>
#include <sndfile.h>

// Function to read audio file and convert to double values
std::vector<double> readAudioFile(const std::string& filename) {
    // Open the audio file for reading
    SF_INFO sfInfo;
    SNDFILE* sndFile = sf_open(filename.c_str(), SFM_READ, &sfInfo);
    if (!sndFile) {
        std::cerr << "Error opening audio file: " << filename << std::endl;
        return {};
    }

    // Read audio samples into a vector of doubles
    std::vector<double> audioSamples(sfInfo.frames);
    sf_read_double(sndFile, audioSamples.data(), sfInfo.frames);

    // Close the audio file
    sf_close(sndFile);

    return audioSamples;
}