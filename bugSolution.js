```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      {/* Adding prefetch="false" can sometimes resolve issues */}      <Link href="/about" prefetch={false}>
        <a>About Us</a>
      </Link>
       {/*Alternative solution: Using useRouter hook for more control over navigation*/}
       {/* <button onClick={() => router.push('/about')}>About Us</button> */}
    </div>
  );
}

export default MyComponent;
```