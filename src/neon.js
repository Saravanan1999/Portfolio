(function(){
    const canvas = document.getElementById('neonCanvas');
    const ctx    = canvas.getContext('2d');
  
    // resize helper
    function resize(){
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();
  
    // build an array of drifting particles
    const particles = Array.from({length:120}, () => ({
      x:     Math.random()*canvas.width,
      y:     Math.random()*canvas.height,
      r:     Math.random()*1.5 + 0.5,
      vx:    (Math.random()-0.5)*0.3,
      vy:   -(Math.random()*0.8 + 0.2),
      alpha: Math.random()*0.6 + 0.4,
      phase: Math.random()*Math.PI*2
    }));
  
    function draw(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      particles.forEach(p => {
        // move & wrap
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width +10) p.x = -10;
  
        // flicker by phase
        p.phase += 0.04;
        const glow = Math.sin(p.phase)*0.5 + 0.5;
  
        // radial gradient for soft neon glow
        const grad = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.r*8
        );
        grad.addColorStop(0, `rgba(8,114,191,${glow*p.alpha})`);
        grad.addColorStop(1, 'rgba(8,114,191,0)');
        ctx.fillStyle = grad;
  
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r*6, 0, Math.PI*2);
        ctx.fill();
      });
  
      requestAnimationFrame(draw);
    }
  
    draw();
  })();
  