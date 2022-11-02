import * as Styled from './style';

import theme from '../../Data/theme.json';
import { useState } from 'react';

export default function Header() {

    const [themePage, setThemePage] = useState(null);

    return (
        <Styled.Cotainer className='center' >
            <h1>ola mundo</h1>
        </Styled.Cotainer>
    )
}