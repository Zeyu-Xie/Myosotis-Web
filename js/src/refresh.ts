// Refreshing

const init_refreshing = (): void => {
    const _refreshing: Element[] = Array.from(document.getElementsByClassName("refreshing"));

    Array.from(_refreshing).forEach((item) => {
        const content = item.getAttribute("content");
        const frequency = item.getAttribute("frequency");

        if (content && frequency) {
            const freqValue = parseInt(frequency);
            if (!isNaN(freqValue) && freqValue > 0) {
                setInterval(() => {
                    try {
                        const evaluatedContent = eval(content); // Use caution with eval!
                        (item as HTMLElement).innerText = evaluatedContent;
                    } catch (error) {
                        console.error("Error evaluating content:", error);
                    }
                }, 1000 / freqValue);
            } else {
                console.warn(`Invalid frequency value: ${frequency}`);
            }
        } else {
            console.warn("Missing content or frequency attribute on element:", item);
        }
    });
};

init_refreshing();
