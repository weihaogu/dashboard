import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Avatar, Tooltip} from '@nextui-org/react';
import {Flex} from '../styles/flex';
import {CompaniesDropdown} from './companies-dropdown';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {PaymentsIcon} from '../icons/sidebar/payments-icon';
import {BalanceIcon} from '../icons/sidebar/balance-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {CustomersIcon} from '../icons/sidebar/customers-icon';
import {ProductsIcon} from '../icons/sidebar/products-icon';
import {ReportsIcon} from '../icons/sidebar/reports-icon';
import {DevIcon} from '../icons/sidebar/dev-icon';
import {ViewIcon} from '../icons/sidebar/view-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {CollapseItems} from './collapse-items';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {FilterIcon} from '../icons/sidebar/filter-icon';
import {useSidebarContext} from '../layout/layout-context';
import {ChangeLogIcon} from '../icons/sidebar/changelog-icon';
import {useRouter} from 'next/router';
import {DarkModeSwitch} from '../navbar/darkmodeswitch';
export const SidebarWrapper = () => {
   const router = useRouter();
   const {collapsed, setCollapsed} = useSidebarContext();

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position:'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
   <Sidebar.Header>
   <DarkModeSwitch />

      <CompaniesDropdown />
   </Sidebar.Header>
   <Flex
      direction={'column'}
      justify={'between'}
      css={{height: '100%'}}
   >
      <Sidebar.Body className="body sidebar">
         <SidebarItem
            title="Dashboard"
            icon={<HomeIcon />} // Replace with actual dashboard icon component
            isActive={router.pathname === '/dashboard'}
            href="/"
         />
         <SidebarMenu title="Management">
            <SidebarItem
               title="Shop Manager"
               icon={<ProductsIcon />} // Replace with actual shop manager icon component
               isActive={router.pathname === '/shop-manager'}
               href="/services"
            />
            <SidebarItem
               title="Insights"
               icon={<ReportsIcon />} // Replace with actual insights icon component
               isActive={router.pathname === '/insights'}
               href="/insights"
            />
            <SidebarItem
               title="Transactions"
               icon={<HomeIcon />} // Replace with actual transactions icon component
               isActive={router.pathname === '/transactions'}
               href="/transactions"
            />
            <SidebarItem
               title="Marketing"
               icon={<ViewIcon />} // Replace with actual marketing icon component
               isActive={router.pathname === '/marketing'}
               href="/marketing"
            />
         </SidebarMenu>

         <SidebarMenu title="Settings">
            <SidebarItem
               title="Settings"
               icon={<SettingsIcon />} // This might be the same icon used in the footer
               isActive={router.pathname === '/settings'}
               href="/settings"
            />
         </SidebarMenu>
      </Sidebar.Body>
      <Sidebar.Footer>
         <Tooltip content={'Help'} rounded color="primary">
            <CustomersIcon /> 
         </Tooltip>
         <Tooltip content={'Sign Out'} rounded color="primary">
            <AccountsIcon /> 
         </Tooltip>
      </Sidebar.Footer>
   </Flex>
</Sidebar>

      </Box>
   );
};
