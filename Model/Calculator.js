export default class Calculator{
    constructor(){}

    calculateExonerations(tax, lineSubTotal, productCode, bill){
        tax.amount = tax.percentage / 100 * lineSubTotal;
        tax.exonerations.map((exo) => {
            exo.taxAmount = exo.purchPercentage / 100 * tax.amount;
            bill.totalVoucher -= exo.taxAmount;
            if (productCode >= 0 && productCode < 6){
                bill.totalexcemptedMech += exo.taxAmount;
            } else {
                bill.totalExcemptServices += exo.taxAmount;
            }
        });
    }

    calculateLineTax(line, bill){
        line.total = line.quantity * line.unitPrice;
        line.subtotal = line.total - line.discount;
        line.linetotal = line.subtotal;
        line.taxes.map((tax) => {
            this.calculateExonerations(tax, line.subtotal, line.productCode, bill);
            line.linetotal += tax.amount;
            bill.totalTaxes += tax.amount;
        });
    }

    calculateAll(bill){
        bill.lines.map((line) => {
            this.calculateLineTax(line, bill);
            bill.totalSold += line.total;
            bill.totalDiscount += line.discount;
            if (line.productCode >= 0 && line.productCode < 6){
                bill.totalSavedMerch += line.total;
            } else {
                bill.totalSavedServices += line.total;
            }
        });
        bill.totalNetSold = bill.totalSold - bill.totalDiscount;
        bill.totalVoucher = bill.totalNetSold + bill.totalTaxes;
    }
}