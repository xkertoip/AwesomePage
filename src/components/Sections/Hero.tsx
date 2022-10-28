import Image from 'next/image'
import hero2 from '/public/images/me2_retusz.png'

import Link from "next/link";
import FancyButton from "../FancyButton";
const Hero = () => {
    return <>
        <div className={'min-h-screen relative'}>
        <div className={'p-4'}>
            <h2 className={'section-indicator'}>
                Hello,
            </h2>
            <div className={'relative'}>
                <div className={'max-w-[60vw] relative m-auto'}>
                    <div className={'before:absolute before:drop-shadow-2xl before:w-full before:h-[85%] before:bg-indigo-700 before:bottom-0 before:rounded-3xl before:-rotate-[45deg] before:origin-center  before:animate-wiggleBg'}>
                        <div className={'rounded-3xl drop-shadow-2xl rotate-[-15deg] origin-center m-auto  relative  overflow-hidden  before:absolute before:w-full before:h-[85%] before:bg-zinc-600 before:bottom-0 before:rounded-3xl animate-wiggle '}>
                            <div className={'animate-move'}>
                                <Image
                                    src={hero2}
                                    alt={'Piotr Szczypka'}
                                    layout={'responsive'}
                                    objectFit={'contain'}
                                    sizes="(max-width: 768px) 60vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'relative  translate-y-[-4rem] space-y-8'}>
                    <h1 className={'title-big text-right drop-shadow-xl'}><span className={'text-zinc-600 text-[8rem]'}>P</span><span className={'relative -left-8'}>iotr</span><br/> Szczypka</h1>
                    <p>
                        Hello, my name is Piotr. I am <span className={'underline capitalize'}>
                        web
                    </span> / <span className={'underline capitalize'}>
                        frontend
                    </span>/ <span className={'underline capitalize'}>
                        react
                    </span> / <span className={'underline capitalize'}>
                        creative
                    </span> Developer, you name it.
                        Lucky owner of 4 legs beast called Bobik. <Link href={'/about'}><a className={'underline animate-pulse'}>
                        Let's meet
                    </a></Link>!
                    </p>

                </div>

            </div>
            <div className={'flex justify-evenly items-center'}>
                <FancyButton>

                        <a href={'#about'}>
                            Portfolio
                        </a>

                </FancyButton>
                <Link href={'/contact'}>
                    <a className={'underline animate-pulse text-xl'}>
                        Hire me
                    </a>
                </Link>
            </div>
        </div>


        </div>
    </>
}

export default Hero;

