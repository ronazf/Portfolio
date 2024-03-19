interface NavigationDotsProps {
    active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => {
    const screens = ['home', 'about', 'projects', 'skills', 'contact'];
    return (
        <div className='app__navigation'>
            {screens.map((item, index) => (
                <a
                href={`#${item}`}
                key={item + index}
                className='app__navigation-dot'
                style={ active === item ? { backgroundColor: '#5cdb95' } : { } }
                />
            ))}
        </div>
    )
}

export default NavigationDots