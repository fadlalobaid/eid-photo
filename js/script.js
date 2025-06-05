
    function generateCard() {
      const userName = document.getElementById('userName').value.trim();
      const userImage = document.getElementById('userImage').files[0];
      const cardName = document.getElementById('cardNameText');
      const cardImage = document.getElementById('cardImage');
      const greetingCard = document.getElementById('greetingCard');

      if (!userName || !userImage) {
        alert('يرجى إدخال الاسم واختيار صورة.');
        return;
      }

      cardName.textContent = userName;
      cardImage.src = URL.createObjectURL(userImage);
      greetingCard.classList.remove('hidden');
    }

    function downloadCard() {
      const greetingCard = document.getElementById('greetingCard');
      html2canvas(greetingCard).then(canvas => {
        const link = document.createElement('a');
        link.download = 'eid_greeting.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
