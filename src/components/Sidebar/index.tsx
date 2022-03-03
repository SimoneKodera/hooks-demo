import { ROUTES } from '../../constants';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu, Item } = Menu;

export const Sidebar = () => {
    return (
        <div>
            <Menu mode='inline'>
                {ROUTES.map((route) => {
                return (
                    route.submenu ? (
                        <SubMenu key={route.path} title={route.title}>
                            {route.submenu.map(r =>
                                    <Item key={r.path} >{r.title}</Item>
                            )}
                        </SubMenu>
                    ) : (
                            <Item key={route.path}>{route.title}</Item>
                    )
                )
            })}
            </Menu>
        </div>
    )
}