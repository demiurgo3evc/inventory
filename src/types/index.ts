import z from 'zod';

//user
export const auth=z.object({
    id:z.string(),
    username:z.string(),
    email:z.email(),
    businessName:z.string(),
    password:z.string()
})

export type TAuth=z.infer<typeof auth>
export type TAuthForm=Omit<TAuth,"id">
export type Login=Pick<TAuth,"email"|"password">

// ======
export const ProductionSchema = z.object({
    id: z.number(),
    date: z.string() ,
    qtyMade: z.number().nullable(),
    qtySold: z.number().nullable(),
    unitPrice: z.number().nullable(),
    ingredientCost: z.number().nullable(),
    dailyFee: z.number().nullable(),
    wereLeft: z.number().nullable(),
    sold: z.number().nullable(),
    netIncome: z.number().nullable()
})

export type TDaily = z.infer<typeof ProductionSchema>;

export type TProduction = Omit<TDaily, "wereLeft" | "sold" | "netIncome"|"id">

export type TIngredient = {
    name: string
    qty: number
    unit: string
    price: number
}