import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppLayout, { withAppLayout } from '.';

jest.mock('../Sidebar', () => () => <div data-testid="sidebar-test-id" />);

describe('features/AppLayout', () => {
  it('renders AppLayou with child component', () => {
    const layoutTestId = 'layout-test-id';

    const { getByTestId } = render(
      <AppLayout>
        <div data-testid={layoutTestId} />
      </AppLayout>
    );

    expect(getByTestId(layoutTestId)).toBeInTheDocument();
    expect(getByTestId('sidebar-test-id')).toBeInTheDocument();
  });

  it('wraps component with Layout', () => {
    const testComponentId = 'test-component-id';
    const Component = () => <div data-testid={testComponentId} />;

    const WrappedComponent = withAppLayout(Component);

    expect(WrappedComponent.getLayout).toBeDefined();
  });

  it('renders component with Layout', () => {
    const testComponentId = 'test-component-id';
    const testChildComponentId = 'test-child-component-id';

    const Component = () => <div data-testid={testComponentId} />;
    const ChildComponent = () => <div data-testid={testChildComponentId} />;

    const WrappedComponent = withAppLayout(Component);

    const getComponentLayout = WrappedComponent.getLayout ?? ((page) => page);

    const { getByTestId } = render(
      <>{getComponentLayout(<ChildComponent />)}</>
    );

    expect(getByTestId(testChildComponentId)).toBeInTheDocument();
  });
});
