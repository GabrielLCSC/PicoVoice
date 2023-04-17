const modelPath = 'path/to/model.pv';
const keywordPathLight = 'path/to/light.ppn';
const keywordPathOff = 'path/to/off.ppn';
const sensitivity = 0.5;

const voiceDetectorLight = pv_VoiceDetector.create(modelPath, keywordPathLight, sensitivity);
voiceDetectorLight.addCallback((keyword) => {
    if (keyword === 'light') {
        document.getElementById('lamp-img').src = 'lampe-on.jpg';
    }
});

const voiceDetectorOff = pv_VoiceDetector.create(modelPath, keywordPathOff, sensitivity);
voiceDetectorOff.addCallback((keyword) => {
    if (keyword === 'off') {
        document.getElementById('lamp-img').src = 'lampe-off.jpg';
    }
});

voiceDetectorLight.start();
voiceDetectorOff.start();