import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollShow() {
    return (
        <div className="further-wrapper" id="scrollViable">
            <div className="further">
                <motion.div
                    animate={{
                        y: [10, 35, 10],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="furtherComponent"
                />
            </div>
        </div>
    );
}
