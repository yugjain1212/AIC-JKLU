import { redirect } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function LegacyCompanyRedirect({ params }: PageProps) {
  redirect(`/companies/${params.slug}`);
}
