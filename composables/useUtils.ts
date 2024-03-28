export const useUtils = () => {
    const formatCurrency = (number: number) => {
        if (number)
            return number.toLocaleString('en-us');
        else
            return 0
    };

    return {
        formatCurrency
    }
}
