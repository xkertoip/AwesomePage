import Image from 'next/image'
import hero from '/public/images/rsz_hero.jpg'
const Hero = () => {
    return <>
        <div className={'section-container grid min-h-screen'}>
            <div className={'sm:flex sm:gap-8 '}>
                <div className={'sm:flex-1 '}>
                    <div className={' pt-8'}>
                        <h1 className={'title-big capitalize interactive-title__before '}>
                            Hello<span className={'text-indigo-700 animate-pulse'}>,</span>
                        </h1>
                        <h1 className={'title-big interactive-title__before '}>
                            I am
                        </h1>
                        <h1 className={'title-big interactive-title__before  '}>
                            Piotr
                        </h1>
                    </div>
                    <h2>
                        N&#176;1
                        <br />
                        ..greetings
                    </h2>
                </div>

                <div
                    className={
                        'min-w-[200px] max-w-[400px] sm:flex-1 sm:mt-auto pt-8 mx-auto'
                    }
                >

                            <Image
                                src={hero}
                                alt={'Piotr Szczypka'}
                                layout={'responsive'}
                                objectFit={'contain'}
                                priority
                            />

                </div>
            </div>
  {/*          <div className={'mt-8 sm:my-auto'}>
                <h1>status</h1>
            </div>*/}
 {/*           <span
                className={`absolute top-0 left-[25%] w-px h-[100%] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secondary before:w-full before:h-full before:animate-transVertical before:opacity-40 before:-z-[1]`}
            />
            <span
                className={`absolute top-[60%] h-px w-[100%] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:bg-secondary before:w-full before:h-full before:animate-transHorizontal before:opacity-40 before:-z-[1]`}
            />*/}
        </div>
    </>
}

export default Hero;