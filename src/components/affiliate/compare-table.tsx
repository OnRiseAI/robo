import type { Product } from '@/assets/data/products'

export function CompareTable({ products }: { products: Product[] }) {
  const rows = [
    ['Price', ...products.map(product => (product.price.current ? `$${product.price.current.toLocaleString('en-US')}` : 'Check price'))],
    ['Status', ...products.map(product => product.status.replaceAll('-', ' '))],
    ['Alexa', ...products.map(product => (product.smartHome.alexa ? 'Yes' : 'No'))],
    ['Google Home', ...products.map(product => (product.smartHome.googleHome ? 'Yes' : 'No'))],
    ['Apple Home', ...products.map(product => (product.smartHome.appleHome ? 'Yes' : 'No'))],
    ['Matter', ...products.map(product => (product.smartHome.matter ? 'Yes' : 'Verify'))],
    ['Updated', ...products.map(product => product.updatedAt)]
  ]

  return (
    <div className='overflow-hidden rounded-xl border'>
      <div className='overflow-x-auto'>
        <table className='w-full min-w-175 text-left text-sm'>
          <thead className='bg-muted/50'>
            <tr>
              <th className='p-4 font-medium'>Spec</th>
              {products.map(product => (
                <th key={product.slug} className='p-4 font-medium'>
                  {product.brand} {product.model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row[0]} className='border-t'>
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`} className='p-4 text-muted-foreground first:text-foreground'>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
