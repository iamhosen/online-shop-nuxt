export const useUtils = () => {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD",
        }).format(value);
    }

    return {
        formatCurrency
    }
}
