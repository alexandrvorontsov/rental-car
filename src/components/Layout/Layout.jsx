import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export default function Layout() {
  return (
    <>
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
}
