import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        // Инициализация состояния времени текущей датой и временем
        this.state = { time: new Date() };
    }

    componentDidMount() {
        // Установка интервала для обновления времени каждую секунду
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        // Очистка интервала при размонтировании компонента
        clearInterval(this.timerID);
    }

    tick() {
        // Обновление состояния времени
        this.setState({
            time: new Date()
        });
    }

    render() {
        // Извлечение часов, минут и секунд из текущего времени
        const hours = this.state.time.getHours();
        const minutes = this.state.time.getMinutes();
        const seconds = this.state.time.getSeconds();

        // Форматирование времени в строку
        const timeString = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

        return (
            <div>
                {/* Отображение строки с временем */}
                <h1>{timeString}</h1>
            </div>
        );
    }
}

export default Clock;