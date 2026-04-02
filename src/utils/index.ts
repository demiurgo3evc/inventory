export const formatNumber = (value: number): string => {
    return Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value)
}

export const formatDate = (date: string): string => {
    
    const [year, month, day] = date.split('-')
   
    return `${day}/${month}/${year}`
}