const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
});
  
export const formatOperand = (operand: any) => {
    if (operand == null) return;
    const [integer, decimal] = operand?.toString().split('.')
    if (decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}
  