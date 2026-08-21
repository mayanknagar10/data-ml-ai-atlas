# Ship it

Vision pipelines must keep resize/crop/normalization identical between training and serving. Throughput depends heavily on resolution, batch size and device kernels.
