function calculateRisk() {
  var totalScore = 0;

  // 處理問題1 (DEMO的單選按鈕)
  var demoRadio = document.querySelector('input[name="test"]:checked');
  if (demoRadio) {
    totalScore += parseInt(demoRadio.value, 10);
  }

  // 處理問題2 (年齡的單選按鈕)
  var ageRadio = document.querySelector('input[name="age"]:checked');
  if (ageRadio) {
    totalScore += parseInt(ageRadio.value, 10);
  }

  // 處理問題3 (運動頻率的單選按鈕)
  var exerciseRadio = document.querySelector('input[name="exercise"]:checked');
  if (exerciseRadio) {
    totalScore += parseInt(exerciseRadio.value, 10);
  }

  // 處理問題4 (飲食習慣的單選按鈕)
  var dietRadio = document.querySelector('input[name="diet"]:checked');
  if (dietRadio) {
    totalScore += parseInt(dietRadio.value, 10);
  }

  // 處理問題5 (壓力水平的單選按鈕)
  var stressRadio = document.querySelector('input[name="stress"]:checked');
  if (stressRadio) {
    totalScore += parseInt(stressRadio.value, 10);
  }

  // 顯示結果
  var result = document.getElementById('result');
  result.textContent = "你的總分數是: " + totalScore;
}
