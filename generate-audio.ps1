
$OutputEncoding = [System.Text.Encoding]::UTF8
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voices = $synth.GetInstalledVoices()
$koreanVoice = $voices | Where-Object { $_.VoiceInfo.Culture.Name -eq "ko-KR" -and $_.VoiceInfo.Gender -eq "Female" } | Select-Object -First 1
if ($null -ne $koreanVoice) { $synth.SelectVoice($koreanVoice.VoiceInfo.Name) }
$synth.Rate = 2

$audioDir = "C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\remotion-project\\public\\audio"
if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Path $audioDir }

$scenes = @(
    @{ text = "세상의 모든 시작, 네이버와 함께하세요."; file = "scene_1.wav" },
    @{ text = "궁금한 무엇이든, 가장 빠르고 정확하게 찾아드립니다."; file = "scene_2.wav" },
    @{ text = "트렌디한 쇼핑부터 똑똑한 멤버십까지, 한 곳에서 즐기세요."; file = "scene_3.wav" },
    @{ text = "오늘의 실시간 정보를 한눈에, 당신만의 뉴스를 만나보세요."; file = "scene_4.wav" },
    @{ text = "어디로 가든 정확하게, 네이버 지도가 함께합니다."; file = "scene_5.wav" },
    @{ text = "일상의 모든 연결, 지금 바로 네이버."; file = "scene_6.wav" }
)

foreach ($scene in $scenes) {
    $path = Join-Path $audioDir $scene.file
    $synth.SetOutputToWaveFile($path)
    $synth.Speak($scene.text)
    Write-Host "Generated: $($scene.file)"
}
$synth.Dispose()
