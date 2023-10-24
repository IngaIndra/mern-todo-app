import React from 'react'
import { KeyContainer, BulletPoint } from "./styles";

function Key() {
    return (
        <KeyContainer role='list'>
            <BulletPoint role='listitem'>
                Incomplete
            </BulletPoint>
            <BulletPoint role='listitem'>
                Complete
            </BulletPoint>
        </KeyContainer>
    )
}

export default Key