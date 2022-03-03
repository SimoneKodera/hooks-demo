import { useCallback, useState } from "react";
import { message } from "antd";

const useAsync = (fn:any) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const execute = useCallback(() => {
        setLoading(true);
        setData(null);
        return fn()
            .then((response: any) => {
                setLoading(false);
                setData(response);
            })
            .catch((error:any) => {
                setLoading(false);
                message.warn(error.msg);
            })
    }, [fn])
    
    return { execute, data, loading };
}

export {
    useAsync
}