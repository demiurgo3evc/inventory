import z, { number } from 'zod';

export const ProductionSchema = z.object({
    id: z.number(),
    date: z.string(),
    qtyMade: z.number(),
    qtySold: z.number(),
    unitPrice: z.number(),
    ingredientCost: z.number(),
    dailyFee: z.number(),

    wereLeft: z.number(),
    sold: z.number(),
    netIncome: z.number()
})

export type TDaily = z.infer<typeof ProductionSchema>;

export type TProduction = Omit<TDaily, "wereLeft" | "sold" | "netIncome">

export type TIngredient = {
    name: string
    qty: number
    unit: string
    price: number
}