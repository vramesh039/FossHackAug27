import React from 'react';
import './IconsPanel.scss';

const icons = [
  { id: 'king', name: 'King', image: '♔' },
  { id: 'queen', name: 'Queen', image: '♕' },
  { id: 'minister', name: 'Minister', image: '♗' },
  { id: 'soldier', name: 'Soldier', image: '♙' },
];

interface IconsPanelProps {
  onClose: () => void;
}

const IconsPanel: React.FC<IconsPanelProps> = ({ onClose }) => {
  const onDragStart = (e: React.DragEvent, iconId: string, iconImage: string) => {
    e.dataTransfer.setData('text/plain', iconId);
    e.dataTransfer.setData('image', iconImage);
  };
  
    return (
      <div className="icons-panel">
        <button className="close-button" onClick={onClose}>×</button>
        <h3>Draggable Icons</h3>
        <div className="icons-list">
        {icons.map((icon) => (
  <div
    key={icon.id}
    className="icon"
    draggable
    onDragStart={(e) => onDragStart(e, icon.id, icon.image)}
  >
    {icon.image}
  </div>
))}
        </div>
      </div>
    );
  };
  
  export default IconsPanel;