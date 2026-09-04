import { useState, useEffect } from "react"

export function useFeedback() {
    const [feedback, setFeedback] = useState({ info: '', message: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!feedback.info) return;

        const timer = setTimeout(() => {
            setFeedback({ info: '', message: '' });
        }, 5000);

        return () => { clearTimeout(timer) };

    }, [feedback.info])

    return { feedback, setFeedback, loading, setLoading };

}
