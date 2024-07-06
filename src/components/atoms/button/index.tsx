import { Ref, forwardRef } from 'react'
import { IButtonProps } from './type'
import { getButtonClasses } from './style'
import cn from '@/utils/class-names';

const Button: React.FC<IButtonProps> = forwardRef(
    (props: IButtonProps, ref: Ref<HTMLButtonElement>) => {
        const { children, id } = props
        const buttonClasses = cn(getButtonClasses(props.variant, props.sizes, props.types));

        return (
            <button
                {...props}
                ref={ref}
                id={id ?? "m_comp_button"}
                className={buttonClasses}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button';

export default Button