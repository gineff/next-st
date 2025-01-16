import Link from 'next/link';



export default function Actions() {
  return (
      <>
        <h1 className='text-4xl py-4'>Actions</h1>
        <Link href="/actions/use-action-state">
          <h2 className='text-3xl py-4'>useActionState</h2>
        </Link>
        
      </>
  );
}
