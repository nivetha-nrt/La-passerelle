
export class Renderer
{

    constructor(canvasId)
    {
        let canvas = document.getElementById(canvasId);

        // Redimensionnement du canvas pour qu'il prenne tout l'écran
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        /** @type CanvasRenderingContext2D */
        this.context = canvas.getContext('2d');
        this.isDrawing = false;
        this.shapes = [];


    }

    addShape(shape)
    {
        // Enregistre une nouvelle figure géométrique dans la liste de ce qu'il y a à dessiner
        this.shapes.push(shape);
    }

    clearCanvas(color)
    {
        this.context.fillStyle = color;
        this.context.fillRect
        (
            0, 
            0, 
            this.context.canvas.width, 
            this.context.canvas.height
        );
    }

    refresh()
    {
        // Boucle qui parcours la liste des figures géom&étriques à dessiner 
        for (let shape of this.shapes) {

            // Demande à une figure géométrique de se dessiner, à l'aide du Renderer
            shape.draw(this);
        }
    } 


    setup()
    {
        // Mise en place du code permettant de dessiner à la souris dans le canvas

        let colors = document.querySelectorAll('#palette-couleurs li');

        for (const color of colors) {

            color.addEventListener('click', (event) => 
            {
                switch(event.target.className)
                {
                    case 'couleur-jaune':
                        this.strokeColor = 'yellow';
                    break;

                    case 'couleur-vert':
                        this.strokeColor = 'green';
                    break;

                    case 'couleur-bleu':
                        this.strokeColor = 'blue';
                    break;

                    case 'couleur-rouge':
                        this.strokeColor = 'red';
                    break;

                    case 'couleur-noir':
                        this.strokeColor = 'black';
                    break;
                }
                
            });
        }
     


        // Quand on enfonce un bouton de la souris, il faut activer la possibilité de dessiner.
        this.context.canvas.addEventListener('mousedown', () =>
        {
            this.isDrawing = true;

            this.context.strokeStyle = this.strokeColor;
            this.context.lineWidth = 3;
            this.context.beginPath();

        });

        // Quand on relâche un bouton de la souris, il faut désactiver la possibilité de dessiner.
        this.context.canvas.addEventListener('mouseup', () =>
        {
            this.isDrawing = false;

        });


        // Quand on déplace la souris, si l'un des boutons de la souris est enfoncé, il faut dessiner sans le canvas. 
        this.context.canvas.addEventListener('mousemove', (event) =>
        {
            if(this.isDrawing == true)
            {
                // event.clientX et event.clientY contiennent les coordonnées de la souris dans canvas

                this.context.lineTo(event.clientX, event.clientY);
                this.context.stroke();

            }
        }); 
    }

}