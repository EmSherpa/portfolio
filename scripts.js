// Example JavaScript for additional interactivity
<script>
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => { const textElement = document.querySelector('.scrolling-text');
	const roles = ["Web developer","Software Developer", "Computer Trainer", "Rapper"];
	let index = 0;
	
	function updateText(){
		textElement.style.animation = 'none';
		textElement.offsetHeight;
		textElement.style.animation = '';
		textElement.textContent = roles[index]
		index = (index+1)% roles.length;
	}
	setInterval(updateText, 2000)
});
</script>