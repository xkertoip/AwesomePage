import { motion } from 'framer-motion';
import React, {FunctionComponent, useContext} from "react";
import MenuContext from "../../MenuContext";
import Link from "next/link";



const item = {
    close: {
        opacity: 0,
        translateY: '100%',
        transition: {
            ease: 'linear',
        },
    },
    open: {
        opacity: 1,
        translateY: 0,
        transition: {
            ease: 'linear',
        },
    },
};

const Content: FunctionComponent = () => {
    const { handleOpen } = useContext(MenuContext);
    return (
        <>
            <div className={'overflow-hidden'}>
                <motion.h2 variants={item}>
                    N&#176;0
                    <br />
                    menu
                </motion.h2>
            </div>
            <nav>
                <menu className={'overflow-hidden pr-8'}>
                    <li
                        onClick={handleOpen}
                        className={'overflow-hidden py-2 flex justify-end'}
                    >
                        <Link href={'/'}>
                            <a id={'home'} className={'target:underline '}>
                                <motion.h1
                                    className={'text-4xl md:text-6xl hover:text-secondary hover:dark:text-secondary ease-in-out duration-300'}
                                    variants={item}
                                >
                                    Home
                                </motion.h1>
                            </a>
                        </Link>
                    </li>
                    <li
                        onClick={handleOpen}
                        className={'overflow-hidden py-2 flex justify-end'}
                    >
                        <Link href={'/about'}>
                            <a id={'about'} className={'target:underline '}>
                                <motion.h1
                                    className={'text-4xl md:text-6xl hover:text-secondary hover:dark:text-secondary ease-in-out duration-300'}
                                    variants={item}
                                >
                                    About
                                </motion.h1>
                            </a>
                        </Link>
                    </li>
                    <li
                        onClick={handleOpen}
                        className={'overflow-hidden py-2 flex justify-end'}
                    >
                        <Link href={'/connect'}>
                            <a>
                                <motion.h1
                                    className={'text-4xl md:text-6xl hover:text-secondary hover:dark:text-secondary ease-in-out duration-300'}
                                    variants={item}
                                >
                                    Connect
                                </motion.h1>
                            </a>
                        </Link>
                    </li>

                </menu>
            </nav>
            <ul className={'pb-4 text-active dark:text-secondary md:text-2xl'}>
                <li className={'overflow-hidden'}>
                    <motion.p variants={item}>Kasinka Ma??a, 648</motion.p>
                </li>
                <li className={'overflow-hidden'}>
                    <motion.p variants={item}>
                        <motion.a href="tel:+48 536 777 364">+48 536 777 364</motion.a>
                    </motion.p>
                </li>
                <li className={'overflow-hidden'}>
                    <motion.p variants={item}>Poland</motion.p>
                </li>
            </ul>
        </>
    );
}
export default Content;
