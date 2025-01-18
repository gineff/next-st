import Link from 'next/link';



export default function Actions() {
  return (
      <>
        <h1 className='text-4xl py-4'>Actions</h1>
        <Link href="/actions/use-action-state">
          <h2 className='text-3xl py-4'>useActionState</h2>
        </Link>
        <Link href="/actions/use-form-status">
          <h2 className='text-3xl py-4'>useFormStatus</h2>
        </Link>
        <Link href="/actions/use-client">
          <h2 className='text-3xl py-4'>use client</h2>
        </Link>
        <Link href="/actions/use">
          <h2 className='text-3xl py-4'>use</h2>
        </Link>
      </>
  );
}
