document.addEventListener('DOMContentLoaded', () => {
    const updateProgress = () => {
      const now = new Date();

      // --- Прогресс минуты ---
    const secondsInMinute = 60;
    const currentSecond = now.getSeconds();
    const minuteProgress = (currentSecond / secondsInMinute) * 100;
    setTimeout(() => {
      document.querySelectorAll('.progress')[0].style.width = `${minuteProgress}%`;
    }, 100); // Таймаут для запуска анимации

    // Обновляем текст секунды
    // const seconds = currentSecond.toString().padStart(2, '0');
    // document.getElementById('minute-time').textContent = `${seconds}s`;
  
      // --- Прогресс дня ---
      const secondsInDay = 24 * 60 * 60;
      const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
      const dayProgress = (currentSeconds / secondsInDay) * 100;
      setTimeout(() => {
        document.querySelectorAll('.progress')[1].style.width = `${dayProgress}%`;
      }, 100); // Таймаут для запуска анимации
  
      // Обновляем текст времени
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      document.getElementById('day-time').textContent = `${hours}:${minutes}`;
  
      // --- Прогресс недели ---
      const weekProgress = ((now.getDay() + currentSeconds / secondsInDay) / 7) * 100;
      setTimeout(() => {
        document.querySelectorAll('.progress')[2].style.width = `${weekProgress}%`;
      }, 100);
  
      // Обновляем текст дня недели
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      document.getElementById('week-day').textContent = daysOfWeek[now.getDay()];
  
      // --- Прогресс месяца ---
      const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      const monthProgress = ((now.getDate() - 1 + currentSeconds / secondsInDay) / daysInMonth) * 100;
      setTimeout(() => {
        document.querySelectorAll('.progress')[3].style.width = `${monthProgress}%`;
      }, 100);
  
      // Обновляем текст месяца
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      document.getElementById('month-name').textContent = months[now.getMonth()];
  
      // --- Прогресс года ---
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
      const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;
      setTimeout(() => {
        document.querySelectorAll('.progress')[4].style.width = `${yearProgress}%`;
      }, 100);
  
      // Обновляем текст года
      document.getElementById('year-number').textContent = now.getFullYear();
    };
  
    // Вызов функции сразу
    updateProgress();
  
    // Установка интервала для обновлений каждую секунду
    setInterval(updateProgress, 1000);

  });