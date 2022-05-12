import 'antd/dist/antd.css';

import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { Specifications } from './components/Specifications/Specifications';
import Specification from "./interfaces/specification";
import SpecificationService from './services/SpecificationService';

const MyDiv = styled.div``;

const SpecCard = (spec: Specification) => <tr key={spec.id}>
    <td>{spec.title}</td>
    <td>{spec.state}</td>
    <td>{spec.owner}</td>
    <td>{spec.namespace}</td>
</tr>

function App() {
    const [data, setData] = useState<Specification[]>([]);
    const specService = useRef<SpecificationService>(new SpecificationService());
    useEffect(() => {
        const specs = specService.current.getAll();
        setData(specs);
    }, []);
    return (
        <MyDiv>
            <Specifications />
            <table>
                <tbody>
                {
                    data.map(SpecCard)
                }
                </tbody>
            </table>
        </MyDiv>
    );
}

export default App;
