import { gsap } from 'gsap';
import { ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';


useLayoutEffect(() => {
    const timeline = gsap.timeline();
    timeline.from(["#home", "#about", "#services", "#portfolio", "#contact", "#number"], {
      y: -10,
      opacity: 0,
      stagger: 0.5,
      delay: 1,
      duration: 1
    });

    return () => {
      timeline.kill(); // Kill the animation when component unmounts
    };
  }, []);




  const comp = useRef(null);


  ref={comp}
