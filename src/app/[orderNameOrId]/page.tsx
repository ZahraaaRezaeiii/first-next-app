import React from 'react'

type IOrderProps = {
    params: Promise<{id: string}>;
    searchParams: Promise<{}>;
}

async function order (props: IOrderProps) {

    const {id} = await props.params
    console.log(id);
    
    return (
        <div>
            order
        </div>
    )
}

export default order