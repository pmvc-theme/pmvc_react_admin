export default Link;
declare function Link({ item, ...props }: {
    [x: string]: any;
    item: any;
}): JSX.Element;
declare namespace Link {
    namespace defaultProps {
        const item: boolean;
    }
}
