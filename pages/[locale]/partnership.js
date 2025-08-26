import { useEffect } from 'react';
import { useRouter } from 'next/router';

function PartnershipRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/eleven-labs');
  }, [router]);

  return null;
}

export default PartnershipRedirect;
