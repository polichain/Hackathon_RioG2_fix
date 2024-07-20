'use server';
import { sql } from '@vercel/postgres';

type Vendor = {
    id: number;
    place: string;
    address: string;
};

export async function fetchAllVendors(): Promise<Vendor[]> {
    try {
        const result = await sql`
            SELECT id, place, address FROM vendors
        `;

        // Mapeia os resultados para o tipo Vendor
        const data: Vendor[] = result.rows.map(row => ({
            id: row.id,
            place: row.place,
            address: row.address,
        }));

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch vendor data.');
    }
}

export async function addVendor(place: string, address: string): Promise<void> {
    try {
        const existingVendor = await sql`
            SELECT * FROM vendors
            WHERE address = ${address}
        `;

        if (existingVendor.rows.length > 0) {
            console.log('Address already exists, not adding new vendor.');
            return;
        }

        await sql`
            INSERT INTO vendors (place, address)
            VALUES (${place}, ${address})
        `;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add new vendor.');
    }
}
