import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    const location = useLocation();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionState, setTransitionState] = useState<'entering' | 'entered' | 'exiting'>('entered');

    useEffect(() => {
        if (children !== displayChildren) {
            // Start exit animation
            setTransitionState('exiting');

            // After exit animation, swap content and start enter animation
            const timeout = setTimeout(() => {
                setDisplayChildren(children);
                setTransitionState('entering');

                // Mark as fully entered after enter animation
                const enterTimeout = setTimeout(() => {
                    setTransitionState('entered');
                }, 400);

                return () => clearTimeout(enterTimeout);
            }, 200);

            return () => clearTimeout(timeout);
        }
    }, [children, displayChildren, location.pathname]);

    // Initial mount - trigger enter animation
    useEffect(() => {
        setTransitionState('entering');
        const timeout = setTimeout(() => {
            setTransitionState('entered');
        }, 400);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`page-transition page-transition--${transitionState}`}>
            {displayChildren}
        </div>
    );
}
