/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Flashes = () => {
    const flashes = useMemo(() => [
        { delay: 0.5, x: '20%', y: '30%' },
        { delay: 2.5, x: '80%', y: '60%' },
        { delay: 4.0, x: '50%', y: '10%' },
    ], []);

    return (
        <>
            {flashes.map((flash, i) => (
                <motion.div
                    key={i}
                    className="absolute top-0 left-0 w-full h-full bg-white pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.7, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.3, delay: flash.delay, repeat: Infinity, repeatDelay: 5 + flash.delay, ease: "circOut" }}
                    style={{ clipPath: `circle(35% at ${flash.x} ${flash.y})` }}
                />
            ))}
        </>
    );
};

export default Flashes;