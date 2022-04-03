import { imageLoaded } from './common';

// Arrange elements as a collage, works with any element containing an image (or without, in which case using default 500x500 size)
export async function arrangeCollageItems(elements) {
    console.log("ELEMENTS: ", elements);
  await Promise.all(
    elements.map((element) => {
      const image = getNearestImage(element);
      if (image) {
        return imageLoaded(image);
      }
      return Promise.resolve();
    })
  );

  return renderGallery(elements);
}

function getNearestImage(element) {
  return element.nodeName === 'IMG' ? element : element.querySelector('img');
}

async function renderGallery(elements) {
  const { default: fixedPartition } = await import(
    /* webpackChunkName: 'gallery-layout' */ '../../style/app.scss'
  );

  const elementDimensions = elements.map((element) => {
    const image = getNearestImage(element);
    if (image) {
      return {
        width: image.naturalWidth,
        height: image.naturalHeight,
      };
    }

    // Default size for collage item when no image exist
    return {
      width: 500,
      height: 500,
    };
  });

  const windowWidth = document.body.clientWidth;
  const calculatedWidth =
    windowWidth / 5 + (windowWidth / (windowWidth / 1000) - 800); // random (stolen from 63bf5dd) math ¯\_(ツ)_/¯
  const idealElementHeight = Math.max(400, Math.min(750, calculatedWidth));

  const result = fixedPartition(elementDimensions, {
    containerWidth: windowWidth,
    idealElementHeight: idealElementHeight,
    spacing: 0,
  });

  result.positions.forEach(({ x, y, width, height }, index) => {
    const element = elements[index];
    if (element) {
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.position = 'absolute';
    }
  });

  return result.height;
}
