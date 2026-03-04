/**
 * Holds the default configuration.
 *
 * @returns {Object} config.
 * @since 1.0.7
 */
const defaultConfig = {
	string: {
		invoice: "I N V O I C E",
		creditNote: "C R E D I T\nN O T A",
		refNumber: "Ref no",
		creditNoteRefNumber: "Credit note no",
		date: "Date",
		dueDate: "Due Date",
		creditNoteDueDate: "Refund Date",
		status: "Status",
		billTo: "Bill To",
		item: "Item",
		quantity: "Qty",
		price: "Price",
		discount: "Discount",
		tax: "Tax",
		total: "Total",
		subTotal: "Subtotal",
		totalTax: "Total Tax",
		totalDiscount: "Total Discount",
		fee: "Total Fee",
		grandTotal: "Grand Total",
		creditNoteGrandTotal: "Total to Refund",
		creditNoteReason: "Reason",
		creditNoteReference: "Credit note regarding invoice {number} of {date}",
	},
};

module.exports = defaultConfig;
