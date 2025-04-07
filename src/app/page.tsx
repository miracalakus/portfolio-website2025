import Introduction from './components/Intro';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (

    <div>
      <div className='h-screen'>
      <Introduction/>
      </div>
      <div>
      <ProjectCard/>
      </div>
    </div>
  );
}
